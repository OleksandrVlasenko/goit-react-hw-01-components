import user from 'templates/user.json';
import data from 'templates/data.json';
import friends from 'templates/friends.json';
import transactions from 'templates/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from 'components/App/App.styled';
import { Title, StatList, Statistics } from 'components/Statistics/index';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics>
        <Title title="Upload stats" />
        <StatList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
