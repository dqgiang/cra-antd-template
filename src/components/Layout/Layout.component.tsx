import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import BasicLayout, { PageContainer } from '@ant-design/pro-layout';
import {
  SiderMenuProps,
  defaultRenderCollapsedButton,
} from '@ant-design/pro-layout/lib/components/SiderMenu/SiderMenu';

import Footer from './Footer/footer.component';

const menuHeaderRender = (
  logoDom: React.ReactNode,
  titleDom: React.ReactNode,
  props: SiderMenuProps | undefined,
) => (
  <Link to="/">
    {logoDom}
    {!props?.collapsed && titleDom}
  </Link>
);

const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
  <Link to={options.path || ''}>{element}</Link>
);

export type Props = any;

const PageLayout: React.FC<Props> = (props) => {
  const {
    children,
    settings,
    defaultCollapsed,
    showCollapsedButton,
    pageHeaderProps,
    ...restProps
  } = props;
  const { title: pageTitle = '' } = pageHeaderProps || {};

  // NOTE: When intentially set collapsed true by default, avoid breakpoint trigger of ProLayout
  const [breakpoint] = useState(!defaultCollapsed && 'lg');

  return (
    <BasicLayout
      style={{ minHeight: '100vh' }}
      menuItemRender={menuItemRender}
      menuHeaderRender={menuHeaderRender}
      location={location}
      defaultCollapsed={defaultCollapsed}
      breakpoint={breakpoint}
      collapsedButtonRender={!!showCollapsedButton && defaultRenderCollapsedButton}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: 'HOME',
        },
        ...routers,
      ]}
      footerRender={
        settings?.footerRender === undefined || settings.footerRender
          ? (props: any) => <Footer {...props} />
          : undefined
      }
      {...restProps}
    >
      <PageContainer title={pageTitle || ''}>{children}</PageContainer>
    </BasicLayout>
  );
};

export default PageLayout;
