@inject('dataLoad','App\Helpers\CompanyConstant')
<?php  $notes = $dataLoad->getNote();?>
@extends('layouts.header')
@section('title',trans("page.terms"))
@section('keywords',trans("desc.keywords"))
@section('image',asset('images/logo/logofb.jpg'))
@section('url',trans('desc.url'))
@section('description',trans('desc.description'))
@section('content')

    <div class="container">
        <div class="row">
             <div class="col-md-12 ">
                <br>
                <h5 class="title-page"> الشروط والأحكام </h5>
                <br>

                <p>
                  <li>يحظر استخدام التطبيق بغرض الإساءة أو التشهير ضد أي شخص أو أي جهة </li>  
                  <li>   يحظر استخدام التطبيق لانتحال شخصية فرد أو جهة او مؤسسة. يرجى في حالة عدم موافقتك على أي من حالات وشروط هذه الوثيقة، عدم استخدام هذا التطبيق.
                </li>
                <li>
                    وفي كل الأحوال لا يتحمل الموقع أية مسئولية قانونية نتيجة للاستخدام السئ او الاستغلال الغير مشروع للتطبيق إخلاء المسؤولية عن الضمانات                </p> <p>

                </li>


                                     </p>



            </div>
        </div>

    </div>
@stop