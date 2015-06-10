import React from 'react';
import CartContainer from './CartContainer.js';
import ProductsContainer from './ProductsContainer.js';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
        <div>
            <ProductsContainer flux={flux} />
            <CartContainer flux={flux} />
        </div>
    );
},

});

export default App;
