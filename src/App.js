import React from 'react';
import {Table} from 'antd';
import PopupButton from './PopupButton';
import './App.css';

// 虚拟的数据
const dataSource = [
  {key: 'bj', name: '北京', temperature: 32},
  {key: 'sh', name: '上海', temperature: 28},
  {key: 'gz', name: '广州', temperature: 30},
];

// 表格列定义
const columns = [
  {title: '城市', dataIndex: 'name', key: 'name'},
  {title: '气温', dataIndex: 'temperature', key: 'temperature'},
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: (text, record) => (
      // 最后一列渲染操作按钮
      <PopupButton region={record.key} />
    )
  },
];

const App = () => (
  <div style={{width: 450, margin: '30px auto'}}>
    {/* 标题 */}
    <h1 style={{marginLeft: 15}}>城市气温汇总表</h1>
    {/* 表格 */}
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  </div>
);

export default App;
