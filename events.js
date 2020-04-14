const { EventEmitter } = require('events');

class Kettle extends EventEmitter{
    constructor() {
        super();

        setTimeout(() => {
            this.emit('created', {});
        }, 0);
    }
    start() {
        setImmediate(() => {
            this.emit('ready', {});
        });
        process.nextTick(() => {
            this.emit('started', {});
        });
    }
}

const k = new Kettle();
k.start();

k.on('ready', () => {
    console.log('Чайник создан')
});
k.on('started', () => {
    console.log('Чайник включен')
});
k.on('ready', () => {
    console.log('Чайник скипел')
});

setImmediate(() => {
    console.log()
})
