 @inject('dataLoad','App\Helpers\CompanyConstant')
<?php  $notes = $dataLoad->getNote();?>
@extends('layouts.header-modal')
@section('content')
<div>
    <div class="alert-face">حفظ السيرة الذاتية</div>
    <button type="button"  href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="close" data-dismiss="modal">&times;</button>
    <div class="modal-face">

        {!! Form::open(["id"=>"myForm","method"=>"POST","class"=>"form-style-2"]) !!}
        <div class="mymodal">
            <table>
                <tr>
                    <td>
                        <span>حفظ السيرة الذاتية</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="modal-footer">
            <input name="insert_exp" type="submit" value="حفظ" class="btn btn-info" />
            <a href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="btn btn-default">إلغاء</a>
        </div>


        {!! Form::close() !!}

    </div>
</div>
<script type="text/javascript">
    $('#myForm').submit(function(e){
        var name = <?php echo $user_name; ?>;
        e.preventDefault();
        var dataObject =  $("#myForm").serialize();
       // exportPdf(name,dataObject);
        exportPdf(name);
    });
</script>
@stop