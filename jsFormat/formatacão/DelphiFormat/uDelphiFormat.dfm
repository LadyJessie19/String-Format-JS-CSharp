object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Teste de Display Format de Delphi'
  ClientHeight = 272
  ClientWidth = 641
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Segoe UI'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 17
  object Label2: TLabel
    Left = 16
    Top = -1
    Width = 49
    Height = 17
    Caption = '&Formato'
    FocusControl = Edit2
  end
  object Edit2: TEdit
    Left = 167
    Top = 21
    Width = 314
    Height = 27
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'Consolas'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Text = '##.#;(##.#);'
  end
  object Button1: TButton
    Left = 510
    Top = 21
    Width = 75
    Height = 27
    Caption = 'Formata&r'
    Default = True
    TabOrder = 2
    OnClick = Button1Click
  end
  object ComboBox1: TComboBox
    Left = 16
    Top = 22
    Width = 145
    Height = 25
    ItemIndex = 0
    TabOrder = 1
    Text = 'Ponto Flutuante'
    Items.Strings = (
      'Ponto Flutuante'
      'Inteiro'
      'Moeda'
      'Data e Hora')
  end
  object DBGrid1: TDBGrid
    Left = 0
    Top = 80
    Width = 641
    Height = 192
    Align = alBottom
    DataSource = DataSource1
    Options = [dgEditing, dgAlwaysShowEditor, dgTitles, dgIndicator, dgColumnResize, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit, dgTitleHotTrack]
    TabOrder = 3
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -13
    TitleFont.Name = 'Segoe UI'
    TitleFont.Style = []
  end
  object DataSource1: TDataSource
    DataSet = ClientDataSet1
    Left = 432
    Top = 96
  end
  object ClientDataSet1: TClientDataSet
    Aggregates = <>
    FieldDefs = <
      item
        Name = 'fldFloat'
        DataType = ftFloat
      end
      item
        Name = 'fldInt'
        DataType = ftInteger
      end
      item
        Name = 'fldCurrency'
        DataType = ftCurrency
      end
      item
        Name = 'fldDateTime'
        DataType = ftDateTime
      end>
    IndexDefs = <>
    Params = <>
    ProviderName = 'DataSetProvider1'
    StoreDefs = True
    Left = 208
    Top = 160
  end
end
