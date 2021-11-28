 @inject('dataLoad','App\Helpers\CompanyConstant')
<?php  $notes = $dataLoad->getNote();?>
@extends('layouts.header-modal')
@section('content')
<div>
    <div class="alert-face">تحميل السيرة الذاتية</div>
    <button type="button"  href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="close" data-dismiss="modal">&times;</button>
    <div class="modal-face">

        {!! Form::open(["id"=>"myForm","method"=>"POST","class"=>"form-style-2"]) !!}
         <div class="mymodal">
            <table>
                <tr>
                    <td>

                        <span>استخراج السيرة الذاتية بصيغة ملف pdf.</span>
                        <br>
                        <span>يمكنك تحميل السيرة الذاتية عن طريق تطبيق الأندرويد أو من خلال الموقع.</span>

                        <br>
                    </td>


                </tr>

            </table>
        </div>
        <div class="modal-footer">
            <input type="submit" value="تأكيد الشراء" class="btn btn-info"  />
            <a href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="btn btn-default">إلغاء</a>
        </div>


        {!! Form::close() !!}

    </div>
</div>
<script type="text/javascript">
    $('#myForm').submit(function(e){
        e.preventDefault();
        var dataObject =  $("#myForm").serialize();
        confirmPay('download',dataObject);
        $(this).attr('disabled', 'disabled');
    });
</script>
@stop