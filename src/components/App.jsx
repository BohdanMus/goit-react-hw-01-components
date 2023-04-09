import { Profile } from './Profile';
import user from '../path/to/user.json';
import { Statistics } from './Statistics';
import data from '../path/to/data.json';
import { FriendList } from './FriendList';
import friends from '../path/to/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../path/to/transactions.json'


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: 'black',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
