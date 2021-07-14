# GEOGRAPHICAL THERMOMETRY

## Executando a aplicação

1. ```git clone https://github.com/lschmidt7/geo-therm```
2. ```cd path/to/geo-therm```
3. ```npm install```
4. ```node app.js```

## Rotas

Existem basicamente duas rotas de acesso ao sistema

- **/all_weather**: busca todas as cidades armazenadas no banco, requisita os dados atuais de clima através da API e armazena os dados climáticos obtidos na tablea *weather* da base de dados.
- **/weather/:city**: requisita os dados climáticos da cidade informada pela rota e armazena na tablea *weather* do banco

## Logs 

Os logs são gerados em dois arquivos, *info.log* e *error.log*, o primeiro contempla o log geral do sistema com todas as mensagens e o segundo, mais restritivo, armazena todos os logs de erro do sistema.
Cada registro do log armazena *mensagem*, *nível* e *timestamp* do registro.

