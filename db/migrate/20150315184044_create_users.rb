class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, NULL:false
      t.boolean :present, NULL:false, default:false

      t.timestamps null: false
    end
  end
end
