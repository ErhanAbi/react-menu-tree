export interface MenuItem {
  title: string;
  url: string;
  children?: MenuItem[];
}

export const filterMenuItems = (menuItems: MenuItem[], keyword: string) => {
  if (!keyword) {
    return menuItems;
  }

  const filtered: MenuItem[] = menuItems.filter(menuItem => {
    const containsKeyword =
      menuItem.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    const childContainsKeyword: boolean = !!menuItem.children
      ? filterMenuItems(menuItem.children, keyword).length > 0
      : false;

    return containsKeyword || childContainsKeyword;
  });

  return filtered;
};
