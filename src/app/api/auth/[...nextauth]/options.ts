import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      // clientId: `1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com`,
      clientId: `289000307246-eeuq0vfli9ai4ap20g184j7a71jmvps2.apps.googleusercontent.com`,
      // clientSecret: `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`,
      clientSecret: `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`,

    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`
};

export default authOptions;

// {"web":{"client_id":"289000307246-eeuq0vfli9ai4ap20g184j7a71jmvps2.apps.googleusercontent.com","project_id":"royalbakes-b0a7d","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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"}}
