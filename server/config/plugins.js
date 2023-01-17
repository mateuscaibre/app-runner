module.exports = ({ env }) => ({
    
    email: {
      config: {
        provider: 'sendgrid', 
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'mateuscaibre@gmail.com',
          defaultReplyTo: 'mateuscaibre@gmail.com',
          
        },
      },
    },
  
  });


