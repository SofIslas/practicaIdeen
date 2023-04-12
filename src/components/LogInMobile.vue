<template>
  <v-container align="center" class="w-100">
    <div class="d-flex flex-column justify-lg-space-between fill-height">

      <div class="text-h4 font-weight-bold text-primary pa-10">INICIO DE SESIÓN</div>

      <v-form ref="form" v-model="valid" @submit.prevent="submitcuenta">
        <v-text-field type="email" v-model="cuenta.emailSchool_" :rules= "emailRules"  label="Correo Institucional" variant="outlined"></v-text-field>
        <v-text-field type="password" v-model="cuenta.psw" :rules= "passwordRules"  label="Contraseña" variant="outlined"></v-text-field>

        <v-btn color="primary" height="50" width="94%" class="rounded-lg" type="submit">
          Iniciar sesión
        </v-btn>

      </v-form>
    </div>

  </v-container>

</template>

<script >

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBReo3mBq2iOv3rP3_b3rgVIEgPtFoOETQ",
  authDomain: "ideen-6af6d.firebaseapp.com",
  projectId: "ideen-6af6d",
  storageBucket: "ideen-6af6d.appspot.com",
  messagingSenderId: "938677766121",
  appId: "1:938677766121:web:b8e1382debae192f032d78"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default{
  data: () => ({
    valid: true,
    valid2: false,
    cuenta :{
      emailSchool_: "",
      psw: "",
    },
    emailRules:[
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
  }),
  methods: {
    async submitcuenta () {
      const { valid } = await this.$refs.form.validate()
      if (valid){
        const user  =await signInWithEmailAndPassword(auth, this.cuenta.emailSchool_, this.cuenta.psw).then((userCredential) => {
          const userinf=userCredential.user.uid
          alert("SESION INICIADA");
          // AQUI IR A INICIO
        }).catch((error) => {
          alert("CONTRASEÑA O CORREO NO COINCIDEN");
        });

      }

    },

  },
}
</script>