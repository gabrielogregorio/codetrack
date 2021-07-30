# codetrack

Script para gerenciar exibição de logs.

Exemplo de uso:
```js
var {defineTypeLogs, log} = require('./codetrack');

defineTypeLogs(['debug'])

log('log debug 1', 'debug')

// Output: [DEBUG] - log debug 1
```
Tipos de logs
| tipo | resultado |
|------|-------|
| all | Mostra todos os logs |
| debug | Mostra logs de debug |
| error |Mostra logs de erros |
| warning | Mostra logs alerta |
| info | Mostra logs informativos |

# Examplo de uso

```js
var {defineTypeLogs, log} = require('./codetrack');

defineTypeLogs(['info', 'error', 'warning'])

log('Email do usuario é 123@123.com', 'debug')
log('Valor da entrada é undefined', 'debug')

log('Login realizado', 'info')
log('Usuário desconectou', 'info')

log('Erro na consulta SQL', 'error')
log('Erro na consulta a API', 'error')

log('Usuário acessou área restrita no backend', 'warning')
log('Usuário enviou arquivo maior que 15mb', 'warning')

// Output: 
// [INFO] - Login realizado
// [INFO] - Usuário desconectou
// [ERROR] - Erro na consulta SQL
// [ERROR] - Erro na consulta a API
// [WARNING] - Usuário acessou área restrita no backend
// [WARNING] - Usuário enviou arquivo maior que 15mb

```