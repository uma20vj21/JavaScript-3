const charts = [
  '====================',
  '現在持っているのタスク一覧',
  '====================',
];
const todos = ['掃除', '買い物', '散歩'];

charts.forEach((chart) => console.log(chart));
todos.forEach((value, index) => console.log(`${index}: ${value}`));

const put = prompt(
  '「確認、追加、削除、終了」の４つのいずれかを入力してください'
);

if (put === '追加') {
  const task = prompt('タスクを入力してください');
  todos.push(task);
  alert('新しいタスクを追加しました');

  charts.forEach((chart) => console.log(chart));
  todos.forEach((value, index) => console.log(`${index}: ${value}`));
  while (true) {
    const check = confirm('さらに追加しますか？');
    if (check === true) {
      retask = prompt('タスクを入力してください');
      todos.push(retask);
      alert('新しいタスクを追加しました');

      charts.forEach((chart) => console.log(chart));
      todos.forEach((value, index) => console.log(`${index}: ${value}`));
    } else {
      break;
    }
  }
}
