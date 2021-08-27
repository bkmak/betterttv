import React from 'react';
import Panel from 'rsuite/lib/Panel/index.js';
import Toggle from 'rsuite/lib/Toggle/index.js';
import {registerComponent, useStorageState} from '../Store.jsx';
import {SettingIds, CategoryTypes} from '../../../../constants.js';
import styles from '../../styles/header.module.css';

function AutoJoinRaids() {
  const [value, setValue] = useStorageState(SettingIds.AUTO_JOIN_RAIDS);

  return (
    <Panel header="Auto Join Raids">
      <div className={styles.toggle}>
        <p className={styles.description}>Untoggle to be opted out of raids.</p>
        <Toggle checked={value} onChange={(state) => setValue(state)} />
      </div>
    </Panel>
  );
}

export default registerComponent(AutoJoinRaids, {
  settingId: SettingIds.AUTO_JOIN_RAIDS,
  name: 'Auto Join Raids',
  category: CategoryTypes.CHAT,
  keywords: ['auto', 'join', 'raids'],
});