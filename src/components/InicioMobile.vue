<script setup>
  import { ref, onMounted } from 'vue'
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';
  import { getAuth } from "firebase/auth";
  import { doc, getDoc } from "firebase/firestore";

  const nombre = ref("")
  const matricula = ref("")
  const correoIns = ref("")
  const correoPer = ref("")

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
  const db = getFirestore(app);

  onMounted(async () =>{
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {

      nombre.value =docSnap.data().name;
      matricula.value =docSnap.data().matricula;
      correoIns.value =docSnap.data().correoinst;
      correoPer.value =docSnap.data().correoper;
      console.log(nombre.value);
      console.log(matricula.value);
      console.log(correoIns.value);
      console.log(correoPer.value);
    } else {
      console.log("No such document!");
    }

  })
</script>
<template>
      <div class="d-flex flex-column h-auto w-100 justify-space-evenly align-content-center align-center">
        <div class="text-h4 font-weight-bold text-primary w-75"  align="center">INFORMACIÓN DEL ALUMNO</div>
        <v-img
            width="250"
            max-height="250"
            aspect-ratio="16/9"
            cover
            class="rounded-circle"
            src="@/assets/juanEscutia.jpeg"></v-img>

          <div class="d-flex flex-column justify-space-between align-content-center">
            <v-sheet class="pa-2 ma-2" align="center">
              <p class="text-primary font-weight-bold text-h6">Nombre Completo</p>
              <p class="text-secondary font-weight-bold text-h6">{{ nombre }}</p>
            </v-sheet>
            <v-sheet class="pa-2 ma-2" align="center">
              <p class="text-primary font-weight-bold text-h6">Matricula</p>
              <p class="text-secondary font-weight-bold text-h6">{{ matricula }}</p>
            </v-sheet>
            <v-sheet class="pa-2 ma-2" align="center">
              <p class="text-primary font-weight-bold text-h6">Correo Institucional</p>
              <p class="text-secondary font-weight-bold text-h6">{{ correoIns }}</p>
            </v-sheet>
            <v-sheet class="pa-2 ma-2" align="center">
              <p class="text-primary font-weight-bold text-h6">Carrera</p>
              <p class="text-secondary font-weight-bold text-h6">ISC</p>
            </v-sheet>
            <v-sheet class="pa-2 ma-2" align="center">
              <p class="text-primary font-weight-bold text-h6">Correo Personal</p>
              <p class="text-secondary font-weight-bold text-h6">{{correoPer}}</p>
            </v-sheet>
          </div>
      </div>
</template>

<script >

</script>