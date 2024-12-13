import { FlatList, View } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
}

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={""}
          onPress={() => onSelect(item.id)}
          isSelected={selected === item.id}
        />
      )}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
    />
  );
}