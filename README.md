# Nome e Descrição do Projeto:
  API com Node.js, ExpressJS e MongoDB.
  A API ela foi criada pensando em tema de filmes, o título, a descrição, a url da imagem e um trailer oficial do filme inserido.

# Instalação:
  Somente clonando o projeto;
  Verificando se possui na sua máquina o node na versão LTS ou a mais rescente.
  digitando comando npm install, pois as bibliotescas estará inclusa no node_modules.

# Configuração:
  Para que possamos ter acesso ao MongoDB(URL de Conexão);

# USO:
   Para iniciar o servidor, deixamos de forma rudimentar, somente digitando node src/index.js, você receberá uma mensagem que a porta está no ar;
   Descrição das rotas disponíveis e seus respectivos métodos HTTP: 
   GET: http://localhost:8000/filmes, 
   POST: http://localhost:8000/filme, 
   PUT: http://localhost:8000/filme/id, 
   DELETE: http://localhost:8000/filme/id

# Exemplos das Requisições HTTP:
  Poderemos utilizar como ferramentas para nosso apoio o INSOMNIA e/ou POSTMAN.

# Modelos de dados:
  Informações que devemos avaliar no MongoDB: title, description, image_url e trailer_url;

