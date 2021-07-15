# GEOGRAPHICAL THERMOMETRY

## Requisitos

- MySQL 8.0.25
- Node 12.22.3

## Executando a aplicação

1. ```git clone https://github.com/lschmidt7/geo-therm```
2. ```cd path/to/geo-therm```
3. ```npm install```
4. ```create .env file with API_WEATHER_KEY variable```
5. ```npm run createdb```
5. ```npm run dev```

## Rotas

Existem duas rotas de acesso ao sistema

- **/all_weather**: busca todas as cidades armazenadas no banco, requisita os dados atuais de clima através da API e armazena os dados climáticos obtidos na tablea *weather* da base de dados.
- **/weather/:city**: requisita os dados climáticos da cidade informada pela rota e armazena na tablea *weather* do banco

## Rotinas Manuais

O sistema conta com duas rotinas manuais disponíveis no sistema.

A primeira rotina faz a requisição do clima de todas as cidades e armazena no banco
> ```npm run weather all```

A segunda rotina faz a requisição do clima de uma única cidade
> ```npm run weather nome_cidade```

## Rotina Automatizada

Aos 30 minutos de cada hora do dia o sistema requisita as informações climáticas por meio da API e armazena na base de dados.

## Logs 

Os logs são gerados em dois arquivos, *info.log* e *error.log*, o primeiro contempla o log geral do sistema com todas as mensagens e o segundo, mais restritivo, armazena todos os logs de erro do sistema.
Cada registro do log armazena *mensagem*, *nível* e *timestamp* do registro.

## Tests

Os testes se encontram no arquivo *__tests__/routes.spec.js*. Para executar os testes, rode o comando abaixo.

```npm run test```