import recordListModel from '@/components/models/recordListModel';

export default {
  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
}