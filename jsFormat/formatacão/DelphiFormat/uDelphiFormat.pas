unit uDelphiFormat;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Data.db,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Datasnap.DBClient,
  Vcl.Grids, Vcl.DBGrids, Datasnap.Provider;

type
  TForm1 = class(TForm)
    Edit2: TEdit;
    Label2: TLabel;
    Button1: TButton;
    ComboBox1: TComboBox;
    DataSource1: TDataSource;
    ClientDataSet1: TClientDataSet;
    DBGrid1: TDBGrid;
    procedure Button1Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
  var
    fld: TField;
    ix: integer;
    sField: string;
begin

  ix:= ComboBox1.ItemIndex;
  if ( ix < 0 ) then exit;
  sField:= ClientDataSet1.FieldDefs[ix].Name;
  fld:= ClientDataSet1.FieldByName(sField);
  TFloatField(fld).DisplayFormat:= Edit2.Text;

end;

procedure TForm1.FormCreate(Sender: TObject);
begin
  ClientDataSet1.CreateDataSet();
  ClientDataSet1.InsertRecord([12.2, 2023, 365.25, now()] );

end;

end.
