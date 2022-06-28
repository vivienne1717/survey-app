import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <div>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>,
  mountNode,
);