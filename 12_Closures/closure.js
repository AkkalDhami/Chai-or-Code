
// Closure scope chain
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            };
        };
    };
}
// console.log(sum(1)(2)(3)(4)); // 20


function CartCounter() {
    let _count = 0;
    function _updateCount(value) {
        _count += value;
    }
    return {
        increment() {
            _updateCount(1)
        },
        decrement() {
            _updateCount(-1)
        },
        value() {
            return _count;
        }

    }
}

let cartCounter = CartCounter();
cartCounter.increment();
cartCounter.increment();
cartCounter.decrement();
// console.log(cartCounter.value())


// useState

function useState(initial) {
    let _state = initial;

    function setState(value) {
        _state = value;
    }

    function getState() {
        return _state;
    }

    return [getState, setState];
}


function Counter() {
    const [count, setCount] = useState(0);
    return {
        click() {
            setCount(count() + 1)
        },
        render() {
            console.log(`Value: `, count());
        }
        
    }
}

const counter = Counter();
counter.click()
counter.render()
counter.click()
counter.click()
counter.render()