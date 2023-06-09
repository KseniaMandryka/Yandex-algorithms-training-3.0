# Динамическое программирование с одним параметром 

## 21. Три единицы подряд

Ограничение времени	1 секунда<br/>
Ограничение памяти	64Mb<br/>
Ввод	стандартный ввод или input.txt<br/>
Вывод	стандартный вывод или output.txt<br/>

По данному числу N определите количество последовательностей из нулей и единиц длины N, в которых никакие три единицы не стоят рядом.

### Формат ввода
Во входном файле написано натуральное число N, не превосходящее 35.

### Формат вывода
Выведите количество искомых последовательностей. Гарантируется, что ответ не превосходит 231-1.

### Пример

**Ввод**
```js
1

```

**Вывод**
```js
2

```

### [Решение](./21_threeOnesInRow.js])


## 22. Кузнечик

Ограничение времени	1 секунда<br/>
Ограничение памяти	64Mb<br/>
Ввод	стандартный ввод или input.txt<br/>
Вывод	стандартный вывод или output.txt<br/>

У одного из студентов в комнате живёт кузнечик, который очень любит прыгать по клетчатой одномерной доске. Длина доски — N клеток. К его сожалению, он умеет прыгать только на 1, 2, …, k клеток вперёд.
Однажды студентам стало интересно, сколькими способами кузнечик может допрыгать из первой клетки до последней. Помогите им ответить на этот вопрос.

### Формат ввода
В первой и единственной строке входного файла записано два целых числа — N и k .

### Формат вывода
Выведите одно число — количество способов, которыми кузнечик может допрыгать из первой клетки до последней.

### Пример

**Ввод**
```js
8 2

```

**Вывод**
```js
21

```

### [Решение](./22_grasshopper.js)


## 23. Калькулятор

Ограничение времени	2 секунды<br/>
Ограничение памяти	256Mb<br/>
Ввод	стандартный ввод или input.txt<br/>
Вывод	стандартный вывод или output.txt<br/>

Имеется калькулятор, который выполняет следующие операции:
умножить число X на 2;
умножить число X на 3;
прибавить к числу X единицу.
Определите, какое наименьшее количество операций требуется, чтобы получить из числа 1 число N.

### Формат ввода
Во входном файле написано натуральное число N, не превосходящее 106.

### Формат вывода
В первой строке выходного файла выведите минимальное количество операций. Во второй строке выведите числа, последовательно получающиеся при выполнении операций. Первое из них должно быть равно 1, а последнее N. Если решений несколько, выведите любое.

### Пример 1

**Ввод**
```js
1

```

**Вывод**
```js
0
1

```


### Пример 2

**Ввод**
```js
5

```

**Вывод**
```js
3
1 3 4 5

```

### [Решение](./23_calculator.js)


## 24. Покупка билетов

Ограничение времени	1 секунда<br/>
Ограничение памяти	64Mb<br/>
Ввод	стандартный ввод или input.txt<br/>
Вывод	стандартный вывод или output.txt<br/>

За билетами на премьеру нового мюзикла выстроилась очередь из N человек, каждый из которых хочет купить 1 билет. На всю очередь работала только одна касса, поэтому продажа билетов шла очень медленно, приводя «постояльцев» очереди в отчаяние. Самые сообразительные быстро заметили, что, как правило, несколько билетов в одни руки кассир продаёт быстрее, чем когда эти же билеты продаются по одному. Поэтому они предложили нескольким подряд стоящим людям отдавать деньги первому из них, чтобы он купил билеты на всех.
Однако для борьбы со спекулянтами кассир продавала не более 3-х билетов в одни руки, поэтому договориться таким образом между собой могли лишь 2 или 3 подряд стоящих человека.
Известно, что на продажу i-му человеку из очереди одного билета кассир тратит Ai секунд, на продажу двух билетов — Bi секунд, трех билетов — Ci секунд. Напишите программу, которая подсчитает минимальное время, за которое могли быть обслужены все покупатели.
Обратите внимание, что билеты на группу объединившихся людей всегда покупает первый из них. Также никто в целях ускорения не покупает лишних билетов (то есть билетов, которые никому не нужны).

### Формат ввода
На вход программы поступает сначала число N — количество покупателей в очереди (1 ≤ N ≤ 5000). Далее идет N троек натуральных чисел Ai, Bi, Ci. Каждое из этих чисел не превышает 3600. Люди в очереди нумеруются, начиная от кассы.

### Формат вывода
Требуется вывести одно число — минимальное время в секундах, за которое могли быть обслужены все покупатели.

### Пример

**Ввод**
```js
5
5 10 15
2 10 15
5 5 5
20 20 1
20 1 1

```

**Вывод**
```js
12

```

### [Решение](./24_buyTicket.js)


## 25. Гвоздики

Ограничение времени	1 секунда<br/>
Ограничение памяти	64Mb<br/>
Ввод	стандартный ввод или input.txt<br/>
Вывод	стандартный вывод или output.txt<br/>

В дощечке в один ряд вбиты гвоздики. Любые два гвоздика можно соединить ниточкой. Требуется соединить некоторые пары гвоздиков ниточками так, чтобы к каждому гвоздику была привязана хотя бы одна ниточка, а суммарная длина всех ниточек была минимальна.

### Формат ввода
В первой строке входных данных записано число N — количество гвоздиков (2 ≤ N ≤ 100). В следующей строке заданы N чисел — координаты всех гвоздиков (неотрицательные целые числа, не превосходящие 10000).

### Формат вывода
Выведите единственное число — минимальную суммарную длину всех ниточек.

### Пример

**Ввод**
```js
6
3 13 12 4 14 6

```

**Вывод**
```js
5

```

### [Решение](./25_nails.js)

