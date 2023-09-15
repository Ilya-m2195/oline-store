import { Item } from './Item/Item';

export const Items = ({ items, deleteOrder, addToOrder, onShowItem }) => {
  return (
    <main>
      {items.map(el => {
        return (
          <Item
            key={el.id}
            item={el}
            deleteOrder={deleteOrder}
            addToOrder={addToOrder}
            onShowItem={onShowItem}
          />
        );
      })}
    </main>
  );
}

