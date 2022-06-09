const todo = ['掃除', '買い物', '散歩'];

const add = () => {
  console.log ('====================');
  console.log ('現在持っているのタスク一覧');
  console.log ('====================');
  console.log (todo[0]);
  console.log (todo[1]);
  console.log (todo[2]);

}
add ();

const put = prompt ('「確認、追加、削除、終了」の４つのいずれかを入力してください');

document.write();
task = prompt ('タスクを入力してください');
add ();
console.log (task)
cmp = alert ('新しいタスクを追加しました');
