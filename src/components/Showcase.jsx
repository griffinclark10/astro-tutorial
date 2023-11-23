import { useState } from "react";
function Showcase() {
    const [name, setName] = useState('John');

    return (
        <div>Hello {name}</div>
    )
}

export default Showcase