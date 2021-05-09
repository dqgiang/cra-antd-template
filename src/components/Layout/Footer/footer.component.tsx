import React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import './styles.less';

const Footer: React.FC<any> = (props) => {
  return (
    <>
      <DefaultFooter
        className="footer"
        prefixCls="footer"
        links={[
          { key: 'Ant Design', title: 'Ant Design', href: 'https://ant.design', blankTarget: true },
          {
            key: 'My Company',
            title: 'My Company',
            href: 'https://www.example.com',
            blankTarget: true,
          },
        ]}
        copyright={
          process.env.REACT_APP_COPYRIGHT
            ? `${new Date().getFullYear()} ${process.env.REACT_APP_COPYRIGHT}`
            : false
        }
      />
    </>
  );
};

export default Footer;
