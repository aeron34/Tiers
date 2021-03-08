import React from 'react';
import Card from '../Cards/Card'

export function CreateCardArray(card_list, compare)
{
  let arr = [], list = [], a = 0;

  for (var prop in card_list) {
      list.push(card_list[prop]);
      list[a]["name"] = prop
      a++
  }

  list.sort(compare);

  for (let i = 0; i < list.length; i++)
  {
    arr.push(
      <Card key={`${list[i]}+${i}`}
        name={list[i].name}
        rgb={list[i].color}
        stats={list[i]}
      />)
  }

  return arr;
}
