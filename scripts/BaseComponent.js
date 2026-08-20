class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('Невозможно создать экземпляр абстрактного класса BaseComponent!')
        }
    }
    getProxeState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop]
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop]
                target[prop] = newValue

                // console.log('BaseComponent VALUE',newValue, oldValue, 'Сравнение: ',newValue !== oldValue)
                if (newValue !== oldValue) {
                    this.updateUI()
                }

                return true
            }
        })
    }
    // Перерисовка UI в ответ на обновление состояния
    updateUI() {
        throw new Error('Необходимо реализовать метод UI')
    }
}

export default BaseComponent