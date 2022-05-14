import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
    state = {
        count: 5,

    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
                // count: this.state.count > 0 ? this.state.count - 1 : clearInterval(this.timer)
            })
        }, 1000)
        // if (this.state.count === 0) { clearInterval(this.timer) }


    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                return (clearInterval(this.timer))



            }
        }
    }

    render() {
        return (
            <div>{this.state.count}</div>
        )
    }
}

const NewCountDown = () => {
    const [count, setCount] = useState(5)
    useEffect(() => {
        if (count === 0) { return }

        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count}</div>
    )
}


export {
    CountDown,
    NewCountDown
}
