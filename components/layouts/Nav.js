const items = [{id: 1, name: 'AA'}, { id:2, name: 'BB'}, {id:3, name: 'CC'}]

function Nav() {
    return (
        <div style={{ backgroundColor: '#cece' }}>
            <ul>
                {items.map(function(item) {
                    return <li> {item.name} </li>
                })}
            </ul>
        </div>
    )
}

export default Nav;
