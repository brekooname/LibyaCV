@extends('layouts.header-modal')
@section('content')
    <div>
        <div class="alert-face">تعديل صلاحية الموظف</div>
        <button type="button"  href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();' class="close" data-dismiss="modal">&times;</button>


        <div class="modal-face">

            {!! Form::open(["id"=>"myForm","url"=>"company-profile/users/".$user,"method"=>"POST","class"=>"form-style-2"]) !!}
            <div class="mymodal">


                <table class="iteminli">



                    <tr>
                        <td>
                            <label for="level">
                                الرتبة
                                <span class="req">*</span>
                            </label>
                        </td>
                        <td>


                            <select id="level" name="level">

                                     <option @if($allUser->level=="a") selected @endif value="a">مدير</option>
                                     <option @if($allUser->level=="b") selected @endif value="e">موظف</option>
                             </select>
                        </td>
                        <td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="hidden" name="empid" value="{{ $allUser->seeker_id }}">
                            <br>
                            <br>
                            <br>

                            <br>
                            <br>
                            <br>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <input type="submit" value="حفظ" class="btn btn-info"/>
                <a href='javascript:void(0);' onclick='jQuery("#facebox_overlay").click();'
                   class="btn btn-default ">إلغاء</a>
            </div>


            {!! Form::close() !!}

        </div>


    </div>


@stop