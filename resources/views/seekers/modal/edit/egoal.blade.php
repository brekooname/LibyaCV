@extends('layouts.header-modal')
@section('content')
<div>
    <script type="text/javascript">

    </script>
    <div class="alert-face" >تعديل الهدف الوظيفي</div>
    <button type="button"  href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="close" data-dismiss="modal">&times;</button>

    <div class="modal-face">
        {!! Form::open(["class"=>"form-style-2","id"=>"myForm","method"=>"PATCH"]) !!}
        <div class="mymodal">
         <table class="iteminli" >
            <tr>
                <td>
                    <label  for="ed_name">الهدف الوظيفي<span  class="req">*</span></label>
                </td>
                <td>
                    <textarea  maxlength="2000" style="max-height:250px;width:180px ; max-width:300px;height:200px; min-height:150px;" rows="80" name="goal_text" id="goal_text">{{ $goal->goal_text }}</textarea>
                </td>
            </tr>
        </table>
</div>
        <div class ="modal-footer">
         <input type="button" class="btn btn-info" id="create" value="حفظ" />

            <a href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="btn btn-default ">إلغاء</a>

        </div>


        {!! Form::close() !!}

    </div>

</div>
<script type="text/javascript">
    $('#create').click(function(){
        var dataObject =  $("#myForm").serialize();
        editSave('edit-goal','#goal','#golas',dataObject);
    });
</script>
@stop