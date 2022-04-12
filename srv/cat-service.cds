using {
  my.bookshop as my
} from '../db/data-model';


service CatalogService {
    @readonly entity EtAcdoca as projection on my.EtAcdoca;

    action createRecords(RECORDS : many EtAcdoca) returns String;
}