import 'package:flutter/material.dart';

void main() => runApp(const HappyBirthdayApp());

class HappyBirthdayApp extends StatelessWidget {
  const HappyBirthdayApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "生日快乐！！！！！",
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("生日快乐！！！！！"),
        ),
      ),
    );
  }
}
