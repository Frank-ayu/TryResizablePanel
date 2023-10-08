import { useState, useEffect } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "./ResizeHandle.tsx";
import styles from "./styles.module.css";
//https://codesandbox.io/s/react-resizable-panels-zf7hwd
export default function App() {
  const [showLastPanel, setShowLastPanel] = useState(false);
  const [middlePanelSize, setMiddlePanelSize] = useState(60); // 初始大小

  useEffect(() => {
    // 当 showLastPanel 状态变化时，手动设置 middle panel 的大小
    setMiddlePanelSize(showLastPanel ? 30 : 60);
  }, [showLastPanel]);

  return (
    <div className={styles.Root}>
    <div className={styles.Container}>
      <div className={styles.TopRow}>
        <p>
          <button
            className={styles.Button}
            onClick={() => setShowLastPanel(!showLastPanel)}
          >
            {showLastPanel ? "hide" : "show"} bottom panel
          </button>
        </p>
      </div>
      <div className={styles.BottomRow}>
        <PanelGroup autoSaveId="example" direction="horizontal">
            <>
              <Panel
                className={styles.Panel}
                collapsible={true}
                defaultSize={20} // 设置 top panel 的初始大小为 20
                order={1}
              >
                <div className={styles.PanelContent}>top</div>
              </Panel>
              <ResizeHandle />
            </>
            <Panel
            className={styles.Panel}
            collapsible={true}
            defaultSize={middlePanelSize} // middle panel 的大小根据状态动态变化
            order={2}
            >
            <div className={styles.PanelContent}>middle</div>
          </Panel>
          {showLastPanel && (
            <>
              <ResizeHandle />
              <Panel
                className={styles.Panel}
                collapsible={true}
                defaultSize={30} // bottom panel 的大小始终为 20
                order={3}
              >
                <div className={styles.PanelContent}>bottom</div>
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>
    </div>
    </div>
  );
}
