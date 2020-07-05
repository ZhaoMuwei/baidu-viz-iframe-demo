import React, {useState} from 'react';
import {Button, Modal} from 'antd';

// 物可视分享链接前缀
const baseURL = 'https://viz.baidubce.com/prod/sharing/dashboard/';

// 不同城市对应不同的仪表盘
const keyToIDMapping = {
  // 北京
  bj: baseURL + 'ccc7015d5929b3c8b99242db2a1c97c9',
  // 广州
  gz: baseURL + '03723326fe8b83b25fe4fcf2c9e8365d',
  // 上海
  sh: baseURL + 'dce1cb6e87a0f8597948dff2331b1f5b',
};

export default props => {
  // 控制弹窗显隐的 state
  const [visible, setVisible] = useState(false);

  // 显示弹窗
  const showPopup = () => setVisible(true);

  // 隐藏弹窗
  const hidePopup = () => setVisible(false);

  return (
    <>
    <Button type="link" onClick={showPopup}>查看详情</Button>

    <Modal
      centered
      closable
      // 由于本例中的 3 个仪表盘都是 800 * 600 px
      // 因此将弹窗也设定为 800px 宽
      width={800}
      footer={null}
      visible={visible}
      onCancel={hidePopup}
      bodyStyle={{height: 600, padding: 0}}
    >
      {/* iframe 显示仪表盘 */}
      <iframe
        title="仪表盘"
        style={{width: '100%', height: '100%', outline: 'none', border: 'none'}}
        src={keyToIDMapping[props.region]}
      />
    </Modal>
    </>
  );
};
