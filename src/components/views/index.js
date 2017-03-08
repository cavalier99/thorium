import ShortRangeComm from './ShortRangeComm';
import LongRangeComm from './LongRangeComm';
import EngineControl from './EngineControl';
import Thrusters from './Thrusters';
import Navigation from './Navigation';
import Sensors from './Sensors';
import AdminAssets from './AdminAssets';
import ShieldControl from './ShieldControl';
import Transporters from './Transporters';
import Login from './Login';
import SecurityDecks from './SecurityDecks';
import SecurityTeams from './SecurityTeams';
import SecurityScans from './SecurityScans';
import CommDecoding from './CommDecoding';
import Offline from './Offline';

import EngineControlCore from './EngineControl/core';
import TransporterCore from './Transporters/core';
import SensorsGridCore from './Sensors/gridCore';
import SensorsCore from './Sensors/core';
import ShieldControlCore from './ShieldControl/core';
import LRCommCore from './CommDecoding/core';

import ComposerWidget from './LongRangeComm/Composer';
import CalculatorWidget from './Widgets/calculator';


const Views = { Login,
  ShortRangeComm,
  LongRangeComm,
  AdminAssets,
  Thrusters,
  EngineControl,
  Navigation,
  Sensors,
  ShieldControl,
  Transporters,
  SecurityDecks,
  SecurityTeams,
  SecurityScans,
  CommDecoding,
  Offline,
};

export const Widgets = {
  composer: {widget: ComposerWidget, icon: 'pencil-square', name:'Long Range Message Composer', color: 'rgb(200,150,255)'},
  calculator: {widget: CalculatorWidget, icon: 'calculator', name:'Calculator', color: 'rgb(255,200,100)'},

};

export const Cores = { EngineControlCore,
  TransporterCore,
  SensorsGridCore,
  SensorsCore,
  ShieldControlCore,
  LRCommCore,
};

export default Views;