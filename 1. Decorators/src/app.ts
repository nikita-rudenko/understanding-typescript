function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDecriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }

    return adjustedDecriptor;
}

class Printer {
    message = 'This works!'
    
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer;

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);