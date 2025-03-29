export enum SortOptions {
  DEFAULT = 'URUTKAN',
  NAME_ASC = 'Nama A-Z',
  NAME_DESC = 'Nama Z-A',
  DATE_NEWEST = 'Tanggal Terbaru',
  DATE_OLDEST = 'Tanggal Terlama',
}

export type SortModalProps = {
  visible: boolean;

  onSelect: (option: SortOptions) => void;
};
