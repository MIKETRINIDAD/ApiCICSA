# ApiCICSA
Proyecto BackEnd

Manual tecnico.

1.- Cambiar la cadena de conexión, que se encuentra en el archivo ".env".

2.- correr proyecto con npm run dev (terminal de visual code)

 

Nota: Si se requiere cambiar de puerto, es necesario realizar el cambio en el archivo ".env" y en server.ts ,
dirigirse en la función configuration ().


Query de mongodb

use TaskDB

db.tasks.insert({name: 'Programación III', description: 'Programación POO'})
db.tasks.insert({name: 'Programación III', description: 'Funciones asincronos'})
db.tasks.insert({name: 'Arquitectura en la nube', description: 'Configuraciones de servidores'})

db.tasks.updateMany({_id: ''},{$set:{name: 'Matematicas'}})
db.tasks.deleteMany({_id: ''})
db.tasks.find({name: 'Matematicas'})