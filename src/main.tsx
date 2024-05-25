import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {App as AntdApp, ConfigProvider, theme} from "antd";
import locale from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
      <ConfigProvider
        locale={locale}
        theme={{
            algorithm: theme.darkAlgorithm,
            token: {
                colorBgLayout: '#3c3c3c',
                colorBgContainer: "rgb(30 31 34)"
            }
        }}
      >
          <AntdApp>
              <App />
          </AntdApp>
      </ConfigProvider>
  </React.Fragment>,
)
