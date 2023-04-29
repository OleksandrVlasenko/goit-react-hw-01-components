import user from "templates/user.json"
import data from 'templates/data.json';
import friends from 'templates/friends.json';
import transactions from 'templates/transactions.json';

import { Profile } from "components/Profile/Profile";
import { Title } from 'components/Statistics/Title';
import { StatList } from 'components/Statistics/StatList';
import {FriendList} from "components/FriendList/FriendList"
import {TransactionHistory} from "components/TransactionHistory/TransactionHistory"

// import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Title title="Upload stats" />
        <StatList stats={data} />
      </>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
