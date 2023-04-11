<template>
  <v-container align="center" class="w-50">
    <div class="d-flex flex-column justify-space-evenly fill-height">
      <div class="text-h3 font-weight-bold text-primary pa-10">CREA UNA CUENTA</div>
      <v-form ref="form" v-model="valid" @submit.prevent="submitcuenta">
        <v-text-field v-model="cuenta.name" :rules= "nameRules" type="name" label="Nombre Completo" variant="outlined"  ></v-text-field>
        <v-text-field v-model="cuenta.idSchool" :rules= "matriculaRules" type="id" label="Matrícula" variant="outlined"></v-text-field>
        <v-text-field v-model="cuenta.emailSchool" :rules= "emailRules"  type="email" label="Correo Institucional" variant="outlined"></v-text-field>
        <v-text-field v-model="cuenta.emailPer" :rules= "emailRules2" type="email" label="Correo Personal" variant="outlined"></v-text-field>
        <v-text-field v-model="cuenta.psw1" :rules= "passwordRules" type="password" label="Contraseña" variant="outlined"></v-text-field>
        <v-text-field v-model="cuenta.psw2" :rules="passwordRules" type="password" label="Confirmar Contraseña" variant="outlined"></v-text-field>

        <v-switch v-model="cuenta.terminos" :rules= "condicione" value="1"  class="font-weight-bold align-self-center" label="ACEPTO TERMINOS Y CONDICIONES" color="success"></v-switch>
        <v-btn  color="primary" height="50" class="roun"  @click="submitcuenta" type="submit">
          Registrarse
        </v-btn>

      </v-form>
    </div>
  </v-container>
</template>

<script >
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import router from '../router';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBReo3mBq2iOv3rP3_b3rgVIEgPtFoOETQ",
  authDomain: "ideen-6af6d.firebaseapp.com",
  projectId: "ideen-6af6d",
  storageBucket: "ideen-6af6d.appspot.com",
  messagingSenderId: "938677766121",
  appId: "1:938677766121:web:b8e1382debae192f032d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default{
  data: () => ({
    valid: true,
    cuenta :{
      name: "",
      idSchool: "",
      emailSchool: "",
      emailPer: "",
      psw1: "",
      psw2: "",
      terminos: " "
    },
    nameRules: [
      v => !!v || 'Campo requerido',
    ],
    matriculaRules: [
      v => !!v || 'Campo requerido',
      v => v.length === 9 || 'Matricula no valida',
    ],
    emailRules:[
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Email invalido'
      },
      v => !!v || 'Campo requerido',
    ],
    emailRules2:[
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Email invalido'
      },
      v => !!v || 'Campo requerido',
    ],
    passwordRules: [
      v => !!v || 'Campo requerido',
      v => v.length >= 6 || 'Necesitas 6 caracteres',
    ],
    condicione: [
      v => v==="1" || "Acepta los terminos y condiciones"
    ],
  }),
  methods: {
    async submitcuenta () {
      const {valid} = await this.$refs.form.validate()
      if (valid) {
        createUserWithEmailAndPassword(auth, this.cuenta.emailSchool, this.cuenta.psw1)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user.uid;
              setDoc(doc(db, "users", user), {
                    name: this.cuenta.name,
                    matricula: this.cuenta.idSchool,
                    correoper: this.cuenta.emailPer,
                    correoinst: this.cuenta.emailSchool
              });
              this.$store.commit('actualizarUsuario','loggedIn')
              router.push('/');
            })
      }
    },

  },
}
</script>