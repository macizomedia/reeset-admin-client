<template>
  <v-container fluid>
    <v-layout row wrap>
      <div class="text-center">
        <v-dialog v-model="showVerifyDialog" width="500" persistent>
          <v-card>
            <v-card-title
              class="headline grey lighten-2 black--text dlgVerifyAccount"
              primary-title
            >
              <v-icon class="orange--text">mdi-information</v-icon>
              &nbsp;{{ $t('home.VERIFY_YOUR_ACCOUNT') }}
            </v-card-title>
            <v-card-text class="mt-4">
              {{ $t('home.VERIFY_YOUR_ACCOUNT_DESCRIPTION') }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="showVerifyDialog = false"
                class="btnClose"
                >{{ $t('home.CLOSE') }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <Heading :title="$t('home.GREETING', [name])" />
      <Description :description="$t('home.DESCRIPTION')" />
    </v-layout>
    <ProjectDescription />
  </v-container>
</template>

<script>
import db from '../firebase/init'
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('home.TITLE')} - %s`
    }
  },
  data() {
    return {
      projects: [],
      name: this.$store.state.auth.user.name,
      showVerifyDialog: !this.$store.state.verify.emailVerified
    }
  },
  created() {
    db.collection('projects')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
}
</script>
