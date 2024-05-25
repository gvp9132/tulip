import React from 'react';
import {Layout} from 'antd';
import NavigateHeaderComponent from "./NavigateHeaderComponent";
import NavigateSiderComponent from "./NavigateSiderComponent";
import NavigateContentComponent from "./NavigateContentComponent";


const App: React.FC = () => {
    return (
        <Layout>
            <NavigateHeaderComponent/>
            <Layout>
                <NavigateSiderComponent/>
                <NavigateContentComponent/>
            </Layout>
        </Layout>
    );
};

export default App;