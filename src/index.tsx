import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './store/reducers';
// import PageMain from './page/PageMain';
import { cube } from './test';


import './main.css';
// 测试注释
// const store = createStore(reducers);
const App = () =>{
    
    React.useEffect(()=>{
        const hash = window.location.hash;
        if(hash === '#test'){
            // 魔法注释：给模块重命名
            // import(/* webpackChunkName "test" */ './test/test').then((res:any)=>{
            //     console.log('#test');
            // });
        }
    },[]);
    return (
        <div>
            hello,
            {
                cube(6)
            }
        </div>
    );
};

ReactDOM.render(
    // <Provider store={store}>
    //     <PageMain />
        <App />
    // </Provider>
    ,
    document.getElementById('app')
);
