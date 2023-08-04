const EventList: Event[] = [
  { id: 1, name: "Item 1", category: "category1" },
  { id: 2, name: "Item 2", category: "category2" },
];

export interface Event {
  id: number;
  name: string;
  category: string;
}

export default EventList;
