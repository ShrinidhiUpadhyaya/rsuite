<!--start-code-->

```js
import { CheckTree } from 'rsuite';

const data = [
  {
    label: 'Node 1',
    value: '1',
    children: [
      {
        label: 'Node 1-1',
        value: '1-1'
      },
      {
        label: 'Node 1-2',
        value: '1-2'
      }
    ]
  },
  {
    label: 'Node 2',
    value: '2',
    children: [
      {
        label: 'Node 2-1',
        value: '2-1',
        children: [
          {
            label: 'Node 2-1-1',
            value: '2-1-1'
          },
          {
            label: 'Node 2-1-2',
            value: '2-1-2'
          }
        ]
      },
      {
        label: 'Node 2-2',
        value: '2-2'
      }
    ]
  }
];

const App = () => (
  <CheckTree data={data} uncheckableItemValues={['1', '2', '2-1-1', '2-1-2']} defaultExpandAll />
);

ReactDOM.render(<App />, document.getElementById('root'));
```

<!--end-code-->
