### link documentação: https://developers.facebook.com/docs/instagram-api

### link video sobre apis: https://www.youtube.com/watch?v=ghTrp1x_1As

## OBJETIVOS

- Passar mouse, mostrar descrição do post
- Listar 8 posts do instagram ( por página )
- Clicar nos posts e redirecionar para o instagram

https://api.instagram.com/oauth/authorize
  ?client_id=1145071139592062
  &redirect_uri=https://henriqueneubert.github.io/study-api
  &scope=user_profile,user_media
  &response_type=code
  

  GET https://graph.instagram.com/{media-id}
  ?fields={fields}
  &access_token={access-token}